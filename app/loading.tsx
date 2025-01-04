import style from './loading.module.css';

export default function Loading() {
  return (
    <div className={style.loader}>
      <div className="visually-hidden">The page is loading</div>
    </div>
  );
}
