export interface ApiSurveyAnswerDeleteRes {
  success: boolean;
  data: boolean;
}

export interface ApiSurveyAnswerAddRes {
  success: boolean;
  data: {
    user_id: number;
    pupil_id: number;
    foreign_model: string;
    foreign_key: string;
    answers: any;
    // answers: {
    //   name_of_the_survey: Array<string>;
    // };
    created: string;
    updated: string;
    id: number;
  };
}
