function Announcement({announcement}) {
    return (
        <div>
            {announcement.name} {announcement.description}
        </div>
    );
}

export default Announcement;