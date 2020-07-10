import React from "react";
import { auth } from "../services/firebase";
import { Redirect } from "react-router-dom";
import firebase from "firebase/app";

export function signup(email, password) {
  return auth.createUserWithEmailAndPassword(email, password);
}

export function signin(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

export async function signout() {
  await auth.signOut().then(() => <Redirect to="/" />);
}

export async function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  return auth.signInWithPopup(provider);
}

export async function signInWithGithub() {
  const provider = new firebase.auth.GithubAuthProvider();
  return auth.signInWithPopup(provider);
}
