import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
/* styles */
import styles from "./styles.module.css";

interface Inputs {
  example: string;
  exampleRequired: string;
}

export const ReactHookFormSample: React.VFC = () => {
  const {
    register, // フォーム要素にはregisterで一意の名前を渡して登録する必要がある
    handleSubmit, // フォームの入力を確かめた上で、引数に私た関数を呼び出すハンドラ
    watch, // 引数に渡し名前のフォーム要素の入力値を監視して返す
    formState: { errors }, // formState: フォームの状態を情報として納めたオブジェクト errorsプロパティから登録した名前ごとにエラーが取り出せる
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  /**
   * watch: 引数に渡し名前のフォーム要素の入力値を監視して返す
   */
  console.log(watch("example"));

  return (
    // handleSubmit: フォームの入力を確かめた上で、引数に渡した(onSubmit)を呼び出す
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={styles.inputForm}
        defaultValue="test"
        {...register("example")} // フォームの入力の要素を引数の名前で登録する
      />

      <input
        className={styles.inputForm}
        // registerの第二引数: HTML標準フォームデータ検証のルールが渡せる
        {...register("exampleRequired", { required: true })}
      />
      <p>
        {errors.exampleRequired && (
          <span className={styles.errors}>This field is required</span>
        )}
      </p>

      <input type="submit" value="OK" />
    </form>
  );
};
