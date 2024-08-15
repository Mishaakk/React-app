import './CardButton.css';


export default function CardButton({ children, className  }) {
  const cls = 'card-btn' + (className ? ' '+ className : '');
  
  return (
      <button className={cls}>
        {children}
      </button>
  )
}