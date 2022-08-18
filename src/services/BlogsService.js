import { AppState } from "../AppState";
import { bcwSandbox } from "./AxiosService";



class BlogsService{

async getBlogs(){

  const res = await bcwSandbox.get('api/blogs')
  AppState.blog = res.data
  console.log('RES DATA', res.data);
}



}

export const blogsService = new BlogsService()