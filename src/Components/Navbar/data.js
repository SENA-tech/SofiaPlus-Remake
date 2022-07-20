const login = [
    {
        type: "Profile",
        name: "Perfil",
        url: "/profile"
    },
    {
        type: "Support",
        name: "Soporte",
        url: "/support"
    },
    {
        type: "Logout",
        name: "Cerrar Sesion",
        url: "/logout"
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

const territorium = [
    {
        type: "Territorium",
        name: "Territorium",
        url: "https://sena.territorio.la/cms/index.php"
    }
]

module.exports = { login, register, territorium }