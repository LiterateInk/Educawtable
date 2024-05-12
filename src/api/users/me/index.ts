import { EDUCARTABLE_API_EDUCORE } from "~/constants/url";

interface ECApiUsersMe {
  success: true
  data: {
    id: number
    name: string
    firstname: string
    mail: string
    activated: boolean
    disabled: null
    newsletter: boolean
    com_avatar: null
    com_name: null
    pro_avatar: null
    pro_name: null
    teacher: boolean
    parent: boolean
    gender: null
    birthday: null
    last_cgu: null
    keycloak_id: string
    lang: null
    allow_translation: null
    group: string
    roles: string[]
  }
}

interface ApiUsersMe {
  cookies: string[]
  data: ECApiUsersMe["data"]
}

export const callApiUsersMe = async (input: {
  token: string;
}): Promise<ApiUsersMe> => {
  // NOTE: Why `?light=1` ?
  const response = await fetch(`${EDUCARTABLE_API_EDUCORE}/users/me?light=1`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": input.token
    }
  });

  const cookies = response.headers.get("set-cookie") || "";
  if (!cookies) {
    throw new Error("No cookies found");
  }

  const cookie = cookies.split(";")[0];
  const json = await response.json() as ECApiUsersMe;

  return { cookies: [cookie], data: json.data };
};
