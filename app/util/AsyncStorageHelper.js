import React from "react";
//import { AsyncStorage } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

// HELPER FUNCTION FOR UPDATING EVENT IN LOCAL STORE ON ACCEPTING / REJECTING AN EVENT INVITATION
export function updateEventForMember(eventID, onSuccess, onFailure) {
    // console.log("updateEventForMember ::::: ", eventID)
    if (eventID) {
        AsyncStorage.getItem("firebaseDynamiclinkEventId").then(async strEventsInLocalStore => {


            if (strEventsInLocalStore) {
                let arrEvents = JSON.parse(strEventsInLocalStore);
                const filterData = arrEvents.filter(data => data.eventID === eventID);
                let arrayEventsIDs = arrEvents.map(eventToIterate => eventToIterate.eventID)


                if (filterData.length > 0) {
                    let eventToUpdate = filterData[0]
                    let indexToRemove = arrayEventsIDs.indexOf(eventToUpdate.eventID)
                    // console.log("arrEvents BEFORE ::::: ", arrEvents)
                    arrEvents.splice(indexToRemove, 1)
                    // console.log("arrEvents AFTER ::::: ", arrEvents)
                    AsyncStorage.setItem("firebaseDynamiclinkEventId", JSON.stringify(arrEvents)).
                        then(onSuccess, onFailure)
                }
            }
        });
    }

}


export function removeInvitaion(arrayInvitaion, onSuccess, onFailure) {
    if (arrayInvitaion.length > 0) {
        AsyncStorage.getItem("firebaseDynamiclinkEventId").then(async strEventsInLocalStore => {
            if (strEventsInLocalStore) {
                let arrEvents = JSON.parse(strEventsInLocalStore);
                arrEvents = arrEvents.filter(data => !arrayInvitaion.includes(data.eventID))
                // console.log(" ============ ARRAY EVENTS NEW ============ ", arrEvents.length)

                AsyncStorage.setItem("firebaseDynamiclinkEventId", JSON.stringify(arrEvents)).
                    then(onSuccess, onFailure)
            }
        });
    }
}

export function setTopicEventIds(arrayEventIds, onSuccess, onFailure) {
    AsyncStorage.setItem("firebaseTopicEventId", JSON.stringify(arrayEventIds)).then(onSuccess, onFailure);
}

export function getTopicEventIds(onSuccess, onFailure) {
    AsyncStorage.getItem("firebaseTopicEventId").then(async strEventsInLocalStore => {
        if (strEventsInLocalStore) {
            let arrEvents = JSON.parse(strEventsInLocalStore);
            console.log(" GET EVENT DATA ", JSON.parse(strEventsInLocalStore))
            onSuccess(arrEvents);
        } else {
            console.log(" GET EVENT DATA FAILURE IN STORAGE ")
        }
    }, async error => {
        onFailure(error);
    });
}
