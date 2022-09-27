let local = JSON.parse(window.localStorage.getItem('SessionID'));

const login = [
    {
        type: "Profile",
        name: "Perfil",
        url: `/profile/${ !local ? ' ' : local._key }`
    },
    {
        type: "Support",
        name: "Soporte",
        url: "/support"
    },
    {
        type: "Logout",
        name: "Cerrar Sesión",
        url: "/logout"
    }
];

const register = [
    {
        type: "Login",
        name: "Iniciar Sesión",
        url: "login"
    },
    {
        type: "Register",
        name: "Registrarse",
        url: "register"
    }
];

module.exports = { login, register }