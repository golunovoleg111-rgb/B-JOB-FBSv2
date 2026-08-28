import React,{useState} from 'react'
import {useAuth} from '../auth/AuthContext'
import {Navigate,useLocation,useNavigate} from 'react-router-dom'

export function LoginPage(){
 const {user,login}=useAuth(); const nav=useNavigate(); const loc=useLocation(); const [loginValue,setLoginValue]=useState(''); const [password,setPassword]=useState(''); const [error,setError]=useState(''); const [loading,setLoading]=useState(false)
 if(user) return <Navigate to="/" replace />
 const submit=e=>{e.preventDefault();setError('');setLoading(true);const r=login(loginValue.trim(),password);if(r.ok) nav(loc.state?.from||'/');else setError(r.error);setLoading(false)}
 return <main className="login-page"><section className="login-card"><div className="brand-mark">BJ</div><h1>B-JOB FBS</h1><p className="muted">Система управления складом</p><form onSubmit={submit}><label>Логин<input autoFocus value={loginValue} onChange={e=>setLoginValue(e.target.value)} /></label><label>Пароль<input type="password" value={password} onChange={e=>setPassword(e.target.value)} /></label>{error&&<div className="form-error">{error}</div>}<button className="primary full" disabled={loading}>{loading?'Вход…':'Войти'}</button></form><div className="demo-note">Первичный администратор: <b>Admin1</b></div></section></main>
}
