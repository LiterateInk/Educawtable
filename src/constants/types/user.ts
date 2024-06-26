export interface ApiUser {
  id: number

  /**
   * Last name.
   * @example "DUPONT"
   */
  name: string

  /**
   * @example "Gérard"
   */
  firstname: string

  /**
   * @example "someone@domain.com"
   */
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
