import AlertPreview from "../../AlertPreview/AlertPreview";
import React from "react";

function Announcements({announcements}) {
    return (
        <>
            {
                announcements?.length ? announcements
                    .map((announcement, i) => (
                        <AlertPreview
                            key={module.id}
                            name={announcement.name}
                            description={announcement.description}
                        />
                )) : null
            }
        </>
    );
}

export default Announcements;