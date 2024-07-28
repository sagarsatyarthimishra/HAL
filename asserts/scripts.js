document.addEventListener('DOMContentLoaded', function() {
    const events = [
        { event: 'Birthday', link: 'gallery/event1.html', text: 'Birthday Party Planning' },
        { event: 'Retirement', link: 'gallery/event2.html', text: 'Retirement Planning Guide' },
        { event: 'Anniversary', link: 'gallery/event3.html', text: 'Anniversary Celebration Ideas' },
        { event: 'Wedding', link: 'gallery/event4.html', text: 'Wedding Planning Checklist' },
        { event: 'Graduation', link: 'gallery/event5.html', text: 'Graduation Party Ideas' },
        { event: 'New Year\'s Eve', link: 'gallery/event6.html', text: 'New Year\'s Eve Party Tips' },
        { event: 'Baby Shower', link: 'gallery/event7.html', text: 'Baby Shower Planning' },
        { event: 'Housewarming', link: 'gallery/event8.html', text: 'Housewarming Party Ideas' },
        { event: 'Promotion', link: 'gallery/event9.html', text: 'Celebrating a Promotion' },
        { event: 'Engagement', link: 'gallery/event10.html', text: 'Engagement Party Ideas' }
    ];

    const tableBody = document.querySelector('#eventsTable tbody');

    events.forEach(eventItem => {
        const row = document.createElement('tr');

        const eventCell = document.createElement('td');
        eventCell.textContent = eventItem.event;
        row.appendChild(eventCell);

        const linkCell = document.createElement('td');
        const link = document.createElement('a');
        link.href = eventItem.link;
        link.textContent = eventItem.text;
        // link.target = '_blank';
        linkCell.appendChild(link);
        row.appendChild(linkCell);

        tableBody.appendChild(row);
    });
});
