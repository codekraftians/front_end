import CalendarComponent from './components/searchFilter/Calendario';

if (typeof window != "undefine" && !customElements.get("calendar-ctx")) {
    customElements.define("calendar-ctx" , CalendarComponent);
}