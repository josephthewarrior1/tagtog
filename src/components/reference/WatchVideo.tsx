"use client";

import { useRef } from "react";
import { Play, X } from "lucide-react";
import styles from "./ReferenceLanding.module.css";

export function WatchVideo() {
  const dialog = useRef<HTMLDialogElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  function close() { video.current?.pause(); dialog.current?.close(); }
  return <>
    <button className={`${styles.button} ${styles.buttonOutline}`} type="button" onClick={() => dialog.current?.showModal()}>Watch video<Play aria-hidden="true" /></button>
    <dialog ref={dialog} className={styles.videoDialog} aria-label="TAGTOG event video" onClick={(event) => { if (event.target === event.currentTarget) close(); }} onClose={() => video.current?.pause()}>
      <button className={styles.videoClose} type="button" aria-label="Close video" onClick={close}><X /></button>
      <video ref={video} controls playsInline preload="none" poster="/images/reference/hero-conference.jpg"><source src="/videos/hero-event.mp4" type="video/mp4" /><p>Your browser does not support this video.</p></video>
    </dialog>
  </>;
}
