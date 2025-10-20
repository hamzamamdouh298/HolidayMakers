import React, { useState, useMemo } from 'react';
import './App.css';
import AppNewReservation from './AppNewReservation';
import CustomerFormContent from './AppNewCustomer';


// Base style for all icons
const IconBase = (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-base">
        {props.children}
    </svg>
);

// Icon Definitions
const HomeIcon = () => (
    <IconBase>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
    </IconBase>
);

const CalendarIcon = () => (
    <IconBase>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
    </IconBase>
);

const UsersIcon = () => (
    <IconBase>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </IconBase>
);

const TruckIcon = () => (
    <IconBase>
        <path d="M14 18l-3 3H3a2 2 0 0 1-2-2v-3h12"/>
        <path d="M17 18V2h4l3 3v13a2 2 0 0 1-2 2h-4"/>
        <path d="M10 18h4v-3H10z"/>
        <circle cx="7" cy="18" r="3"/>
        <path d="M2 15h12"/>
        <path d="M15 15h4"/>
    </IconBase>
);

const ChevronUpIcon = ({ isOpen }) => (
    <svg 
        // Rotates the chevron to indicate open/closed state
        className={`chevron-icon ${isOpen ? 'open' : 'closed'}`} 
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    >
        <polyline points="18 15 12 9 6 15"/>
    </svg>
);

const menuItems = [
    { 
        title: "Home", 
        icon: HomeIcon, 
        path: "/home" 
    },
    {
        title: "Reservations",
        icon: CalendarIcon, 
        path: "/reservations",
        sub: [
            { title: "Reservations", path: "/reservations/list" },
            { title: "New Reservation", path: "/reservations/new" },
            { title: "Reservation Report", path: "/reservations/report" },
            { title: "Statistics", path: "/reservations/stats" },
        ],
    },
    {
        title: "Customers",
        icon: UsersIcon, 
        path: "/customers",
        sub: [
            { title: "Customers", path: "/customers/list" },
            { title: "New Customer", path: "/customers/new" },
        ],
    },
    {
        title: "Suppliers",
        icon: TruckIcon, 
        path: "/suppliers",
        sub: [
            { title: "Suppliers", path: "/suppliers/list" },
            { title: "New Supplier", path: "/suppliers/new" },
        ],
    },
];

const SidebarItem = ({ item, activePath, setActivePath, toggleOpen, isOpen }) => {
    
    // Check if the current item (or its children) is the active route
    const isActive = useMemo(() => {
        if (item.path === activePath) return true;
        
        if (item.sub) {
            return item.sub.some(subItem => subItem.path === activePath);
        }
        return false;
    }, [item, activePath]);

    // Base class for all primary links
    let currentLinkClasses = "menu-item-base";

    if (item.sub) {
        // Parent item styling: Darker background if open or if any child is active
        if (isOpen || isActive) {
            currentLinkClasses += " parent-open"; 
        }
    } else {
        // Non-sub-menu item styling: Bright background if actively selected
        if (isActive) {
            currentLinkClasses += " active";
        }
    }

    const handleClick = (path) => {
        if (item.sub) {
            // Toggle open state for parents
            toggleOpen(item.title);
        } else {
            // Set active path for non-parent items
            setActivePath(path);
        }
    };

    // Controls the height transition for the submenu
    const subListClasses = `submenu-list ${isOpen ? 'open' : 'closed'}`;

    return (
        <li>
            <div 
                className={currentLinkClasses}
                onClick={() => handleClick(item.path)}
            >
                <div className="icon-container">
                    {item.icon && item.icon()} 
                    <span>{item.title}</span>
                </div>
                
                {item.sub && (
                    <ChevronUpIcon isOpen={isOpen} />
                )}
            </div>

            {item.sub && (
                <ul className={subListClasses}>
                    {item.sub.map((subItem) => (
                        <li key={subItem.path}>
                            <div
                                className={`submenu-item-link ${activePath === subItem.path ? 'active' : ''}`}
                                onClick={() => setActivePath(subItem.path)}
                            >
                                {subItem.title}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

const Sidebar = () => {
    const [activePath, setActivePath] = useState(menuItems[0].path);
    const [openSubmenu, setOpenSubmenu] = useState('Reservations'); // Default to 'Reservations' open

    const toggleOpen = (menuTitle) => {
        setOpenSubmenu(prevTitle => 
            prevTitle === menuTitle ? null : menuTitle
        );
    };

    return (
        <div className="app-container">
            {/* Sidebar Navigation */}
            <nav className="sidebar-nav">
                <div className="sidebar-header">
                    <h1>Holiday Makers</h1>
                </div>
                <ul className="menu-list">
                    {menuItems.map((item) => (
                        <SidebarItem
                            key={item.title}
                            item={item}
                            activePath={activePath}
                            setActivePath={setActivePath}
                            toggleOpen={toggleOpen}
                            isOpen={openSubmenu === item.title}
                        />
                    ))}
                </ul>
            </nav>
            
            {/* Main Content Area */}
            <main className="main-content">
                {activePath === '/reservations/new' ? (
                    <AppNewReservation />
                ) : activePath === '/customers/new' ? (
                    <CustomerFormContent />
                ) : (
                    <div className="content-box">
                        <h2>
                            Active Content: 
                            <span className="active-path-color">{activePath}</span>
                        </h2>
                        <p>The content on this main area changes based on your sidebar selection. This demonstrates the currently selected route.</p>
                    </div>
                )}
            </main>
        </div>
    );
};

export default function App() {
    return (
        <div>
            <Sidebar />
        </div>
    );
}
