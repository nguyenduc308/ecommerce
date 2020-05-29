export default function({redirect, store}) {
    const isAuthenticated = () => {
        return !!store.state.login.userAuth;
    };

    if (!isAuthenticated()){
        return redirect('/login');
    }
};

