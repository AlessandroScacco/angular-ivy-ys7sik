export class EndPoint {
  public static Users: string = "users";  
  public static Posts: string = "posts";  
  public static UsersById = (id: string) => `${EndPoint.Users}\/${id}`;
  public static PostById = (id: string) => `${EndPoint.Posts}\/${id}`;
  
}
