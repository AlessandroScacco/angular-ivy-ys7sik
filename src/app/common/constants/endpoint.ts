export class EndPoint {
  public static USERS: string = "users";  
  public static UsersById = (id: string) => `${EndPoint.USERS}\/${id}`;
  public static POSTS: string = "posts";
}
