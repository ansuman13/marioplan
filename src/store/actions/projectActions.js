export const createProject = (project) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile
        console.log(profile)
        const authorId = getState().firebase.auth.uid
        console.log('testing project reducer', getState())
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstname,
            authorLastName: profile.lastname,
            authorId: authorId,
            createdAt:new Date()
        }).then(()=>{
            dispatch({type:'CREATE_PROJECT', project})
        }).catch((err)=>{
            dispatch({type:'CREATE_PROJECT_ERROR', err})
        })
    }

};


export const deletePost = (projectId) => {
    return (dispatch, getState,  { getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('projects').doc(projectId).delete();
        return dispatch({type:'DELETE_POST', projectId})
    }
}