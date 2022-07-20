const login = [
    {
        type: "Profile",
        name: "Perfil",
        url: "/Profile"
    },
    {
        type: "Territorium",
        name: "Territorium",
        url: "/territorium"
    },
    {
        type: "Support",
        name: "Soporte",
        url: "/Support"
    },
    {
        type: "Logout",
        name: "Cerrar Sesion",
        url: "/Logout"
    }
];

const register = [
    {
        type: "Login",
        name: "Inicia Sesion",
        url: "login"
    },
    {
        type: "Logout",
        name: "Registrarse",
        url: "singin"
    }
];

module.exports = { login, register }