import Sidebar from '@/components/student/Sidebar';
import StudentHeader from '../../components/student/StudentHeader';

export default function StudentLayout({ children }) {
    return (
        <div className="flex flex-col h-screen overflow-hidden">
            <StudentHeader />
            <div className="flex-1 flex flex-row overflow-hidden">
                <Sidebar />
                <main className="flex-1 overflow-y-auto overflow-x-hidden">
                    {children}
                </main>
            </div>
        </div>
    )
}