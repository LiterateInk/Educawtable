export interface ApiParentLikeAddRes {
  success: boolean;
  data: {
    id: number;
    parent_id: any;
    user_id: number;
    body: string;
    modified: string;
    subject_model: string;
    subject_key: string;
    user: {
      id: number;
      name: string;
      firstname: string;
    };
  };
};

export interface ApiParentLikeDeleteRes {
  success: boolean;
  data: Array<any>;
}
