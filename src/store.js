import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//Map related
import L from 'leaflet'
// eslint-disable-next-line
import AwesomeMarkers from "leaflet.awesome-markers/dist/leaflet.awesome-markers.min.js"

export default new Vuex.Store({
    state: {
        markers: [
            { id:0, lng: 300, lat: 300, draggable: false, idTask:0 },
            { id:1, lng: 500, lat: 700, draggable: false, idTask:1 },
            { id:2, lng: 1040, lat: 300, draggable: false, idTask:2 },
            { id:3, lng: 1250, lat: 440, draggable: false, idTask:3 },
            { id:4, lng: 1225, lat: 650, draggable: false, idTask:4 },
        ],
        tasks: [
            { id: 0, title:"Parquet à poser", body:"Dans la chambre", finished:false, idMarker:0, attachedUsers:[2], startingDate: "02/11/2018", endingDate:"05/11/2018" },
            { id: 1, title:"Carrelage à poser", body:"Dans la cuisine", finished:false, idMarker:1, attachedUsers:[1], startingDate: "02/11/2018", endingDate:"05/11/2018" },
            { id: 2, title:"Mur à casser", body:"Dans le salon", finished:false, idMarker:2, attachedUsers:[3], startingDate: "02/11/2018", endingDate:"05/11/2018"},
            { id: 3, title:"Raccorder les eaux", body:"Dans les toilettes", finished:false, idMarker:3, attachedUsers:[5], startingDate: "02/11/2018", endingDate:"05/11/2018"},
            { id: 4, title:"Peindre le plafond", body:"Dans la chambre", finished:false, idMarker:4, attachedUsers:[0], startingDate: "02/11/2018", endingDate:"05/11/2018"}
        ],
        users : [
            {
                id:0,
                name:"Peintre",
                admin:false,
                icon: 'paint-roller'
            },
            {
                id:1,
                name:"Carreleur",
                admin:false,
                icon: 'qrcode'
            },
            {
                id:2,
                name:"Menuisier",
                admin:false,
                icon: 'hammer'
            },
            {
                id:3,
                name:"Plaquiste",
                admin:false,
                icon: 'ruler-combined'
            },
            {
                id:4,
                name:"Architecte",
                admin:true,
                icon: 'map'
            },
            {
                id:5,
                name:"Plombier",
                admin:false,
                icon: 'shower'
            }
        ],
        selectedUser: 4
    },
    getters : {
        getTasks: state => {
            return state.tasks;
        },
        getMarkers: state => {
            return state.markers;
        },
        getUsers: state => {
            return state.users;
        },
        getTask: state => idTask => {
            return state.tasks.find(t => t.id === idTask);
        },
        getUnfinishedTasks: state => {
            return state.tasks.filter(t => !t.finished);
        },
        getMarkersOfUnfinishedTasks: state => {
            const unfinishedTasks = state.tasks.filter(t => !t.finished);
            return state.markers.filter(m => unfinishedTasks.find(t => t.idMarker===m.id));
        },
        getUnfinishedTasksForUsers: state => users => {
            const tasks = state.tasks.filter(t => !t.finished);
            if(state.users.find(u => u.id===users[0]).admin) 
            {
                return tasks;
            }

            const visibleTasks = tasks.filter(t => 
                //at least one user id from users should appear in t.attachedUsers
                t.attachedUsers.includes(users[0])
            );
            return visibleTasks;
        },
        getUnfinishedTasksForSelectedUser: state => {
            const tasks = state.tasks.filter(t => !t.finished);
            if(state.users.find(u => u.id === state.selectedUser).admin) 
            {
                return tasks;
            }

            const visibleTasks = tasks.filter(t => 
                //at least one user id from users should appear in t.attachedUsers
                t.attachedUsers.includes(state.selectedUser)
            );
            return visibleTasks;
        },
        getMarkersOfUnfinishedTasksForSelectedUser: state => {
            const unfinishedTasks = state.tasks.filter(t => !t.finished);
            if(state.users.find(u => u.id === state.selectedUser).admin) 
            {
                return state.markers.filter(m => unfinishedTasks.find(t => t.idMarker===m.id));
            }
            const unfinishedTasksUserSelected = unfinishedTasks.filter(t=> t.attachedUsers.includes(state.selectedUser));
            
            return state.markers.filter(m => unfinishedTasksUserSelected.find(t => t.idMarker===m.id));
        },
        getMarkerIconFromMarkerId: state => idMarker => {
            const linkedTask = state.tasks.find(t => t.idMarker === idMarker);
            console.log(idMarker);
            const linkedUser = state.users.find(u => linkedTask.attachedUsers.includes(u.id));
            const icon = L.AwesomeMarkers.icon({
                prefix:'fa',
                icon: linkedUser.icon,
                markerColor: 'red'
              });
            return icon;
        },
        getTaskLinkedToMarker: state => marker => {
            return state.tasks.find(t => t.idMarker === marker.id);
        }
    },
    mutations : {
        markTaskFinished(state, args){
            const task = state.tasks.find(t => t.id===args.id);
            if(task){
                task.finished = args.finished;
            }
        },
        setSelectedUserId(state,id){
            state.selectedUser = id;
        },
        addTask(state,taskName){
            const taskId = state.tasks.length;
            const newTask = { id: taskId, title:taskName, body:"", finished:false, idMarker: state.markers.length, attachedUsers:[state.selectedUser], startingDate: "02/11/2018", endingDate:"05/11/2018" };
            state.tasks.push(newTask);

            const newMarker = { id:state.markers.length, lng: 900, lat: 800, draggable: false, idTask:taskId };
            state.markers.push(newMarker);
        }
    }
  })