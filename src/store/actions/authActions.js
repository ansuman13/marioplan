export const signInAction = (credentials) => {
    return (dispatch, getState, {
        getFirebase
    }) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            return dispatch({
                type: 'LOGIN_SUCCESS'
            })
        }).catch((err) => dispatch({
            type: 'LOGIN_ERROR',
            err
        }))
    }
}

export const signOutAction = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut()
            .then(() => {
                return dispatch({
                    type: 'SIGNOUT_SUCCESS'
                })
            })
            .catch((err) => {
                dispatch('SIGNOUT_ERROR', err)
            });
    }

}

export const signUpAction = (newUser) => {
    return (dispatch, getState, {getFirebase,getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
                newUser.email,
                newUser.password
            ).then((resp) => {
                return firestore.collection('users').doc(resp.user.uid).set({
                    firstname: newUser.firstName,
                    lastname: newUser.lastName,
                    initials: newUser.firstName[0] + newUser.lastName[0]
                });
            }).then(() => dispatch({type: 'SIGNUP_SUCCESS'}))
            .catch((err) => dispatch({type: 'SIGNUP_ERROR',err}))
    }
}