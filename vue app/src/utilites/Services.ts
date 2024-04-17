type UserType = {
    [key: string]: string | number;
}
/** calls to API impelemts here */
export default class Services {
	public static async signup(user: UserType): Promise<Response> {
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'POST',
            headers,
            body: JSON.stringify(user),
        };
        const resp = await fetch('/api/user/create', requestOptions);
        return resp;
    }

    public static async getLoginStatus(): Promise<Response> {
        var headers = new Headers();
        headers.append("Accept", "application/json");
        var requestOptions = {
            method: 'GET',
            headers,
        };
        const resp = await fetch('/api/user/check', requestOptions);
        return resp;
    }

    public static async getUserById(id: number): Promise<UserType> {
        var headers = new Headers();
        headers.append("Accept", "application/json");
        var requestOptions = {
            method: 'GET',
            headers,
        };
        const resp = await fetch(`/api/user/${id}`, requestOptions);
        const resJson = await resp.json();
        return resJson;
    }

    public static async login({
        email,
        password,
    }: {
        email: string,
        password: string,
    }) {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            email,
            password,
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
        };

        const resp = await fetch("/api/user/login", requestOptions);
        return resp;
    }
}
