export interface ECApiUsersMe {
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

export interface ApiUsersMe {
  cookies: string[]
  data: ECApiUsersMe["data"]
}
