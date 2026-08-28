import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider, useAuth } from './auth/AuthContext'
import { AppLayout } from './layout/AppLayout'
import { LoginPage } from './pages/LoginPage'
import { DashboardPage } from './pages/DashboardPage'
import { UsersPage } from './pages/UsersPage'
import { PlaceholderPage } from './pages/PlaceholderPage'
import './styles.css'

function Guard({children, permission}) {
  const { user, can } = useAuth()
  if (!user) return <Navigate to="/login" replace />
  if (permission && !can(permission)) return <Navigate to="/" replace />
  return children
}
function RouterView() {
  return <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/" element={<Guard><AppLayout><DashboardPage /></AppLayout></Guard>} />
    <Route path="/admin/users" element={<Guard permission="admin.users"><AppLayout><UsersPage /></AppLayout></Guard>} />
    <Route path="/admin/roles" element={<Guard permission="admin.roles"><AppLayout><PlaceholderPage title="Роли" /></AppLayout></Guard>} />
    <Route path="/admin/settings" element={<Guard permission="admin.settings"><AppLayout><PlaceholderPage title="Системные настройки" /></AppLayout></Guard>} />
    <Route path="/admin/log" element={<Guard permission="admin.log"><AppLayout><PlaceholderPage title="Журнал операций" /></AppLayout></Guard>} />
    <Route path="/nomenclature" element={<Guard permission="nomenclature.view"><AppLayout><PlaceholderPage title="Номенклатура" /></AppLayout></Guard>} />
    <Route path="/warehouse" element={<Guard permission="warehouse.view"><AppLayout><PlaceholderPage title="Склад" /></AppLayout></Guard>} />
    <Route path="/inventory" element={<Guard permission="inventory.view"><AppLayout><PlaceholderPage title="Учёт" /></AppLayout></Guard>} />
    <Route path="/assembly" element={<Guard permission="assembly.view"><AppLayout><PlaceholderPage title="Сборка" /></AppLayout></Guard>} />
    <Route path="/revision" element={<Guard permission="revision.view"><AppLayout><PlaceholderPage title="Ревизия" /></AppLayout></Guard>} />
    <Route path="/transfers" element={<Guard permission="transfers.view"><AppLayout><PlaceholderPage title="Перемещения" /></AppLayout></Guard>} />
    <Route path="/integrations" element={<Guard permission="integrations.view"><AppLayout><PlaceholderPage title="Интеграции" /></AppLayout></Guard>} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
}
export default function App(){ return <BrowserRouter><AuthProvider><RouterView /></AuthProvider></BrowserRouter> }
