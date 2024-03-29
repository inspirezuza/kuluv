"use client";

import { useFormState } from "react-dom";
import { login } from "./action";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import { LoginEmail, LoginPassword } from "../components/Login";

export default function Page() {
  const initState = {
    message: "",
  };

  const [state, formAction] = useFormState(login, initState);

  return (
    <>
      <form action={formAction}>
        <div className=" h-screen flex items-center justify-center font-semibold p-4">
          <Card className="max-w-[400px] bg-white/70">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col items-center w-full">
                <p className="text-xl">Welcome to KULUV ! please🥹</p>
                <p className="text-lg text-default-500">
                  ล็อกอินเพื่อเข้าใช้งาน
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <div className="py-2">
                <LoginEmail />
              </div>
              <div className="py-2">
                <LoginPassword />
              </div>
            </CardBody>
            <Divider />
            <CardFooter>
              <div className="flex flex-col items-center w-full">
                <div className="max-w-80 text-sm py-4">
                  {" "}
                  Message : {state?.message}
                </div>
                {/* <button> */}
                <Button
                  type="submit"
                  radius="full"
                  className="w-full bg-gradient-to-tr from-pink-500 to-purple-500 text-white shadow-lg"
                >
                  Login
                </Button>
                {/* </button> */}
              </div>
            </CardFooter>
          </Card>
        </div>
      </form>
      {/* <div className=" h-screen flex items-center justify-center bg-slate-500 font-semibold">
        <div className="bg-slate-300 border p-4 w-full max-w-md ">
          <form action={formAction}>
            <div className=" flex flex-col max-w-md flex-1 gap-1">
              <div>Email :</div>{" "}
              <div className="shadow">
                {" "}
                <input
                  className="rounded-md w-full"
                  type="email"
                  name="email"
                  id=""
                />
              </div>
              <div>Password :</div>{" "}
              <div className="shadow">
                <input
                  className="rounded-md w-full"
                  type="password"
                  name="password"
                  id=""
                />
              </div>
              <div> Message : {state?.message}</div>
              <button className="rounded-md font-bold shadow p-2 bg-blue-500 text-white ">
                Login
              </button>
            </div>
          </form>
        </div>
      </div> */}
    </>
  );
}
