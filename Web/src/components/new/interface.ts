import { RouteComponentProps } from 'react-router-dom';

export interface IPost{

    author: string,
    place: string,
    description: string,
    hashtags: string,
    image: File,


  }

  export interface IState extends IPost {

  }

  export interface IProps extends RouteComponentProps<any>{

  }
