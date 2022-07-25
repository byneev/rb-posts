import cl from './loader.module.css'

export default function Loader() {
  return (
    <div className={cl.loader__wrapper}>
      <div className={cl.loader__body}></div>
    </div>
  )
}