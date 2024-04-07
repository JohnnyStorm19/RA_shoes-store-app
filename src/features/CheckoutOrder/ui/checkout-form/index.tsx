import style from "./checkoutForm.module.scss";

import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";


import toast from "react-hot-toast";
import { Button, FormInputError } from "../../../../shared/ui";
import { getSubmittedCardProducts } from "../../lib/getSubmittedCartProducts";
import { IContext } from "../../../../shared/types";
import { AppContext } from "../../../../app/providers";
import { useSendOrderData } from "../../hooks/useSendOrderData";

const schema = z.object({
  phone: z
    .string()
    .startsWith("+7", { message: "Номер телефона должен начинаться с +7" })
    .length(12, { message: "Номер телефона должен состоять из 12 цифр" }),
  address: z
    .string()
    .trim()
    .min(5, { message: "Укажите адрес доставки" })
    .toLowerCase(),
  agreement: z.literal(true, {
    errorMap: () => ({
      message:
        "Для заказа товаров вы должны дать свое согласие с правилами доставки",
    }),
  }),
});

type Schema = z.infer<typeof schema>;

export const CheckoutForm = () => {
  const { cartProducts, setCartProducts } = useContext(AppContext) as IContext;
  const { mutateAsync: sendOrder, isPending } = useSendOrderData();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });
  const submitForm: SubmitHandler<Schema> = async (data) => {
    const submitData = {
      owner: {
        phone: data.phone,
        address: data.address,
      },
      items: getSubmittedCardProducts(cartProducts),
    };
    const res = await sendOrder(submitData);
    
    if (res.status === 204) {
      toast.success(
        "Заказ создан, данные успешно отправлены! Спасибо, что доверяете нам :)"
      );
      reset();
      setCartProducts([]);
    } else {
      toast.error(
        "Что-то пошло не так. Пожалуйста, заполните форму заказа еще раз"
      );
    }
  };
  return (
    <div>
      <h2 className={style.form_title}>Оформить заказ</h2>
      <form onSubmit={handleSubmit(submitForm)} className={style.form}>
        <label htmlFor="phone">Телефон</label>
        <input
          {...register("phone")}
          id="phone"
          defaultValue={"+7"}
          placeholder="Ваш телефон"
          aria-invalid={errors.phone ? "true" : "false"}
          className={`${style.input_field} ${errors.phone ? style.error : ""}`}
        />

        {errors.phone && errors.phone.message && (
          <FormInputError message={errors.phone.message} />
        )}

        <label htmlFor="address">Адрес</label>
        <input
          {...register("address")}
          id="address"
          aria-invalid={errors.address ? "true" : "false"}
          placeholder="Ваш адрес"
          className={`${style.input_field} ${
            errors.address ? style.error : ""
          }`}
        />
        {errors.address && errors.address.message && (
          <FormInputError message={errors.address.message} />
        )}

        <div className={style.aggrement_wrapper}>
          <input
            {...register("agreement")}
            id="agreement"
            aria-invalid={errors.agreement ? "true" : "false"}
            type="checkbox"
            placeholder="Ваш телефон"
            className={style.checkbox}
          />
          <label htmlFor="agreement">Согласен с правилами доставки</label>
        </div>
        {errors.agreement && errors.agreement.message && (
          <FormInputError message={errors.agreement.message} />
        )}

        <Button
          className={`${style.submit_btn} ${
            isPending || (isSubmitting && style.disabled_btn)
          }`}
          type="submit"
          disabled={isSubmitting || isPending}
        >
          {isPending || isSubmitting ? "Отправка формы..." : "Оформить"}
        </Button>
      </form>
    </div>
  );
};
