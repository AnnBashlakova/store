//import { IDataProducts } from "../../types";

/*enum Status {
    "OK" = 200,
    "Not Found" = 404,
}
  
  class Loader {
    public static load<Data>(
      baseLink: string,
      callback: (data: Data) => void = () => {
        console.error("No callback for GET response");
      }
    ): void {
      fetch(baseLink)
        .then(Loader.errorHandler.bind(Loader))
        .then((res: Response) => {
          const data = res.json() as Promise<Data>;
          return data;
        })
        .then((data: Data) => callback(data))
        .catch((err: Error) => console.error(err));
    }
  
    private static errorHandler(res: Response): Response {
      if (!res.ok) {
        if (res.status === Status["Not Found"])
          console.log(
            `Sorry, but there is ${res.status} error: ${res.statusText}`
          );
  
        throw Error(res.statusText);
      }
  
      return res;
    }
  }
  
  export default Loader;*/