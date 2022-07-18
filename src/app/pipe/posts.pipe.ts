import { Pipe, PipeTransform } from "@angular/core";
import { Post } from "../interfaces/post.interface";

@Pipe({
  name: "postsFilter",
})
export class PostsFilterPipe implements PipeTransform {
  transform(posts: Array<Post>, title: string): any {
    return posts.filter((k) => {
      return k.title.includes(title);
    });
  }
}
