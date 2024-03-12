import { Link } from 'react-router-dom';
export default function BackLink ({ href, text }){
  return <Link to={href}>{text}</Link>;
}