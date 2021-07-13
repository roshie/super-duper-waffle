import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import './firebase';

export default function GetNotes (props) {

    const [state,setState]= useState({
        notes: null,
    });
    var notes = [];

    useEffect( () => {
        var db = firebase.firestore();
        db.collection("notes")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const docData = {
                    id:doc.id,
                    note: doc.data().note,
                };
                notes.push(docData)
            });
            setState({
                notes: notes,
            })
        });// eslint-disable-next-line
    }, [setState])

    var deleteNote = (e) => {
        var id = e.target.getAttribute('note-id');
        
    }

    if (state.notes == null) {
        console.log(" not isLoaded");
        return (<h1> Loading... </h1>)
    } else {
        console.log("isLoaded");
            console.log(state.notes)
            return (
            <div style={{display: 'flex', width: '100vw', height: '100vh'}}> 
            {

                state.notes.map((note) => {
                    return (
                        <div id={note.id} style={{ width: '30vw', height: '30vh', margin: '3vh', backgroundColor: 'wheat'}}>
                            {note.note}
                            <div style={{display: 'flex'}}>
                                <button note-id={note.id}> Edit </button>
                                <button note-id={note.id} onClick={(e) => deleteNote(e)}> Delete </button>
                            </div>
                        </div>
                    );
                    
                })
            }
            </div>
            );
    }
}




