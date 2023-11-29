import AuthenticationService from "../services/AuthenticationService.js";


async function validateUser() {
    const service = new AuthenticationService();

    let token;
    try {
        token = await service.validateUserAndRetrieveToken('sonia.silverado', 'ss');
        console.log(token);
    } catch (error) {
        console.log(error.message);
        return;
    }

    try {
        const { firstname, lastname } = service.decodeToken(token);
        console.log(firstname, lastname);
    } catch (error) {
        console.log(error.message);
        return;
    }

    window.sessionStorage.setItem('token', token);
    window.sessionStorage.setItem('fullname', `${firstname} ${lastname}`);


}

validateUser();