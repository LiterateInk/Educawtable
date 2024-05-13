/** Use for classic conversation */
export type commentsHomework = {
  success: boolean
  data: Array<{
    id: number
    parent_id?: number
    user_id: number
    body: string
    modified: string
    subject_model: string
    subject_key: string
    deleted: boolean
    deleted_date: string
    user: {
      id: number
      name: string
      firstname: string
      lang?: string
      allow_translation?: boolean
    }
    medias: Array<{
      id: string
      name: string
      description: string
      user_id: number
      size: number
      extension: string
      type: string
      people: any
      published: any
      width: any
      height: any
      reso: any
      ratio: any
      lat: any
      lng: any
    }>
  }>
  pagination: {
    page_count: number
    current_page: number
    has_next_page: boolean
    has_prev_page: boolean
    count: number
    limit: number
  }
};
