import React from "react";
import { ISuccessArgs } from "./types";
import NaverLoginButton from "./NaverLoginButton";
import GoogleLoginButton from "./GoogleLoginButton";
import KakaoLoginButton from "./KakaoLoginButton";

export type IOAuthProvider = "naver" | "kakao" | "google";

type IProps = {
  type: IOAuthProvider;
  onSuccess: (args: ISuccessArgs) => void;
  onFailure: () => void;
};

export default ({ type, onSuccess, onFailure }: IProps) => {
  return (
    <>
      {type === "naver" && <NaverLoginButton onSuccess={onSuccess} onFailure={onFailure} />}
      {type === "kakao" && <KakaoLoginButton onSuccess={onSuccess} onFailure={onFailure} />}
      {type === "google" && <GoogleLoginButton onSuccess={onSuccess} onFailure={onFailure} />}
    </>
  );
};
