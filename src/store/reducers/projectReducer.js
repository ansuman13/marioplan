const initialState = {
    projects:[
        {id:1, title:'Mario plays the piano', content:'blah blah blah'},
        {id:2, title:'Rio plays the guitar', content:'blah blah blah'},
        {id:3, title:'Sip plays the bongo', content:'blah blah blah'},
    ]
};

const projectReducer = (state=initialState, action) => {

    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('post created', action.project)
            return state
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err)
            return state
        case 'DELETE_POST':
            console.log('deleted this post', action.projectId)
            return state
         default:{
            return state
        }
    }
}

export default projectReducer;