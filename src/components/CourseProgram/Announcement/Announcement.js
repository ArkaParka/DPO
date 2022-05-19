import {Form} from "react-bootstrap";
import cl from "classnames";
import {useState} from "react";
import {createModule, updateModule} from "../../../api/CoursesAPI";

function Announcement(
    {
        isNewAnnouncement = false,
        order = 0,
        courseId,
        announcement = {
            name: 'Новое объявление',
            description: 'Объявите что-нибудь',
        },
        setAnnouncements,
        announcements = []
    }) {

    const [name, setName] = useState(announcement.name);
    const [description, setDescription] = useState(announcement.description);

    async function handleAnnouncementSaveChanges() {
        if (!name.trim() || !description.trim()) {
            alert('Поле не может быть пустым');
            return;
        }

        let newAnons = Object.assign(announcement, {
            courseId: courseId,
            name: name,
            description: description,
            order: order
        });

        // TODO: создать createAnnouncement и updateAnnouncement методы
        console.log(newAnons);
        if (isNewAnnouncement) {
            let resp = await createAnnouncement(newAnons);
            setAnnouncements(announcements.concat(newAnons));
            cleanState();
        } else {
            let resp = await updateAnnouncement(newAnons);
            let changeAnnouncements = announcements.slice();
            changeAnnouncements[announcement.order] = newAnons;
            setAnnouncements(changeAnnouncements);
            console.log('resp', resp);
        }
    }

    function cleanState() {
        setName('Новое объявление');
        setDescription('');
    }

    return (
        <section className={cl('module')}>
            <Form>
                <Form.Group className="mb-3" controlId="module-name">
                    <Form.Control
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="module-description">
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder='Дополнительное описание'
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        cols="30"
                    />
                </Form.Group>
            </Form>
        </section>
    );
}

export default Announcement;
