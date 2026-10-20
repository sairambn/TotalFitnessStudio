/* ==========================================================================
   TOTAL FITNESS STUDIO (TFS) - DYNAMIC SCHEDULE & CLASS TIMETABLE
   ========================================================================== */

const CLASSES_DATA = [
  // Monday
  { id: 1, day: 'mon', time: '06:00 AM', duration: '50 Min', name: 'Master Sakthi Morning Hypertrophy', category: 'strength', instructor: 'Master Sakthi', role: 'Head Coach & Champion', avatar: 'assets/images/gmap_gym_60.webp', spots: 4, intensity: 'High (●●●●○)', period: 'morning' },
  { id: 2, day: 'mon', time: '07:30 AM', duration: '45 Min', name: 'Rapid Fat Burn & Cardio Drill', category: 'cardio', instructor: 'Coach Vignesh', role: 'Cardio Specialist', avatar: 'assets/images/gmap_gym_2.webp', spots: 8, intensity: 'Intense (●●●●●)', period: 'morning' },
  { id: 3, day: 'mon', time: '10:00 AM', duration: '60 Min', name: 'Women Special Morning Batch', category: 'mind', instructor: 'Coach Priya', role: 'Women Lead', avatar: 'assets/images/gmap_gym_10.webp', spots: 5, intensity: 'Moderate (●●●○○)', period: 'morning' },
  { id: 4, day: 'mon', time: '05:30 PM', duration: '60 Min', name: 'Chest, Shoulders & Arm Blast', category: 'strength', instructor: 'Master Sakthi', role: 'Head Coach', avatar: 'assets/images/gmap_gym_60.webp', spots: 3, intensity: 'Heavy (●●●●○)', period: 'evening' },
  { id: 5, day: 'mon', time: '07:00 PM', duration: '45 Min', name: 'High-Velocity HIIT Circuit', category: 'hiit', instructor: 'Coach Karthik', role: 'Conditioning Trainer', avatar: 'assets/images/gmap_gym_20.webp', spots: 6, intensity: 'Peak (●●●●●)', period: 'evening' },

  // Tuesday
  { id: 6, day: 'tue', time: '06:00 AM', duration: '55 Min', name: 'Olympic Barbell & Squat Clinic', category: 'strength', instructor: 'Master Sakthi', role: 'Head Coach', avatar: 'assets/images/gmap_gym_60.webp', spots: 5, intensity: 'Heavy (●●●●○)', period: 'morning' },
  { id: 7, day: 'tue', time: '08:00 AM', duration: '50 Min', name: 'Lower Body & 45° Leg Press Suite', category: 'strength', instructor: 'Coach Vignesh', role: 'Trainer', avatar: 'assets/images/gmap_gym_3.webp', spots: 6, intensity: 'High (●●●●○)', period: 'morning' },
  { id: 8, day: 'tue', time: '04:30 PM', duration: '60 Min', name: 'Women Evening Core & Tone', category: 'mind', instructor: 'Coach Priya', role: 'Women Lead', avatar: 'assets/images/gmap_gym_10.webp', spots: 4, intensity: 'Moderate (●●●○○)', period: 'evening' },
  { id: 9, day: 'tue', time: '06:30 PM', duration: '50 Min', name: 'Metabolic Conditioning Blitz', category: 'hiit', instructor: 'Coach Karthik', role: 'HIIT Trainer', avatar: 'assets/images/gmap_gym_20.webp', spots: 7, intensity: 'Peak (●●●●●)', period: 'evening' },

  // Wednesday
  { id: 10, day: 'wed', time: '06:00 AM', duration: '50 Min', name: 'Back V-Taper & Deadlift Protocol', category: 'strength', instructor: 'Master Sakthi', role: 'Head Coach', avatar: 'assets/images/gmap_gym_60.webp', spots: 3, intensity: 'Heavy (●●●●○)', period: 'morning' },
  { id: 11, day: 'wed', time: '08:30 AM', duration: '45 Min', name: 'Endurance Treadmill & Core Cardio', category: 'cardio', instructor: 'Coach Vignesh', role: 'Cardio Coach', avatar: 'assets/images/gmap_gym_2.webp', spots: 8, intensity: 'High (●●●●○)', period: 'morning' },
  { id: 12, day: 'wed', time: '06:00 PM', duration: '60 Min', name: 'Dual Cable Cross & Bicep Sculpt', category: 'strength', instructor: 'Master Sakthi', role: 'Head Coach', avatar: 'assets/images/gmap_gym_60.webp', spots: 4, intensity: 'Moderate (●●●○○)', period: 'evening' },
  { id: 13, day: 'wed', time: '07:30 PM', duration: '45 Min', name: 'Full-Body Athletic Conditioning', category: 'hiit', instructor: 'Coach Karthik', role: 'Conditioning', avatar: 'assets/images/gmap_gym_20.webp', spots: 5, intensity: 'High (●●●●○)', period: 'evening' },

  // Thursday
  { id: 14, day: 'thu', time: '06:00 AM', duration: '50 Min', name: 'Dumbbell Hypertrophy & Drop Sets', category: 'strength', instructor: 'Master Sakthi', role: 'Head Coach', avatar: 'assets/images/gmap_gym_60.webp', spots: 4, intensity: 'High (●●●●○)', period: 'morning' },
  { id: 15, day: 'thu', time: '10:00 AM', duration: '60 Min', name: 'Women Special Posture & Pelvic Core', category: 'mind', instructor: 'Coach Priya', role: 'Women Lead', avatar: 'assets/images/gmap_gym_10.webp', spots: 7, intensity: 'Moderate (●●●○○)', period: 'morning' },
  { id: 16, day: 'thu', time: '06:00 PM', duration: '60 Min', name: 'Incline Bench & Pec Squeeze', category: 'strength', instructor: 'Coach Vignesh', role: 'Trainer', avatar: 'assets/images/gmap_gym_4.webp', spots: 5, intensity: 'Heavy (●●●●○)', period: 'evening' },
  { id: 17, day: 'thu', time: '07:30 PM', duration: '45 Min', name: 'Kettlebell Velocity & Sweat', category: 'hiit', instructor: 'Coach Karthik', role: 'HIIT Trainer', avatar: 'assets/images/gmap_gym_20.webp', spots: 6, intensity: 'Peak (●●●●●)', period: 'evening' },

  // Friday
  { id: 18, day: 'fri', time: '06:00 AM', duration: '50 Min', name: 'Hamstring, Calves & Quad Burnout', category: 'strength', instructor: 'Master Sakthi', role: 'Head Coach', avatar: 'assets/images/gmap_gym_60.webp', spots: 5, intensity: 'High (●●●●○)', period: 'morning' },
  { id: 19, day: 'fri', time: '08:00 AM', duration: '45 Min', name: 'Cardio Max Heart Rate Intervals', category: 'cardio', instructor: 'Coach Vignesh', role: 'Cardio Coach', avatar: 'assets/images/gmap_gym_2.webp', spots: 6, intensity: 'High (●●●●○)', period: 'morning' },
  { id: 20, day: 'fri', time: '06:00 PM', duration: '60 Min', name: 'Arm Hypertrophy & Gun Show', category: 'strength', instructor: 'Master Sakthi', role: 'Head Coach', avatar: 'assets/images/gmap_gym_60.webp', spots: 3, intensity: 'Moderate (●●●○○)', period: 'evening' },

  // Saturday
  { id: 21, day: 'sat', time: '06:30 AM', duration: '75 Min', name: 'Weekend Warrior Super Strength Circuit', category: 'hiit', instructor: 'Master Sakthi & Team', role: 'All Coaches', avatar: 'assets/images/gmap_gym_60.webp', spots: 8, intensity: 'Maximum (●●●●●)', period: 'morning' },
  { id: 22, day: 'sat', time: '09:00 AM', duration: '60 Min', name: 'Posture Correction & Full Mobility', category: 'mind', instructor: 'Coach Priya', role: 'Women & Mobility Lead', avatar: 'assets/images/gmap_gym_10.webp', spots: 10, intensity: 'Gentle (●●○○○)', period: 'morning' },
  { id: 23, day: 'sat', time: '05:30 PM', duration: '50 Min', name: 'Evening Cardio & Treadmill Sprint Challenge', category: 'cardio', instructor: 'Coach Vignesh', role: 'Trainer', avatar: 'assets/images/gmap_gym_2.webp', spots: 6, intensity: 'High (●●●●○)', period: 'evening' },

  // Sunday
  { id: 24, day: 'sun', time: '07:00 AM', duration: '60 Min', name: 'Sunday Open Floor Free Coaching & Assessment', category: 'strength', instructor: 'Master Sakthi', role: 'Head Coach', avatar: 'assets/images/gmap_gym_60.webp', spots: 12, intensity: 'Personalized', period: 'morning' },
  { id: 25, day: 'sun', time: '09:00 AM', duration: '60 Min', name: 'Body Fat & InBody Review Session', category: 'mind', instructor: 'Team TFS', role: 'Nutrition Mentors', avatar: 'assets/images/gmap_gym_10.webp', spots: 10, intensity: 'Consultation', period: 'morning' }
];

document.addEventListener('DOMContentLoaded', () => {
  const scheduleContainer = document.getElementById('schedule-list-container');
  const dayButtons = document.querySelectorAll('.day-btn');
  const categoryFilter = document.getElementById('schedule-category-filter');
  const timeFilter = document.getElementById('schedule-time-filter');

  let activeDay = 'mon';

  function renderSchedule() {
    if (!scheduleContainer) return;

    const selectedCategory = categoryFilter ? categoryFilter.value : 'all';
    const selectedTime = timeFilter ? timeFilter.value : 'all';

    const filtered = CLASSES_DATA.filter(item => {
      const matchDay = item.day === activeDay;
      const matchCat = selectedCategory === 'all' || item.category === selectedCategory;
      const matchTime = selectedTime === 'all' || item.period === selectedTime;
      return matchDay && matchCat && matchTime;
    });

    if (filtered.length === 0) {
      scheduleContainer.innerHTML = `
        <div style="text-align: center; padding: 3rem; background: var(--bg-surface); border-radius: var(--radius-md); border: 1px dashed var(--border-light);">
          <p style="color: var(--text-secondary); font-size: 1.1rem;">No scheduled classes match your selected filters for this day.</p>
          <button class="btn btn-outline btn-sm" id="reset-schedule-filters" style="margin-top: 1rem;">Reset Filters</button>
        </div>
      `;
      const resetBtn = document.getElementById('reset-schedule-filters');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          if (categoryFilter) categoryFilter.value = 'all';
          if (timeFilter) timeFilter.value = 'all';
          renderSchedule();
        });
      }
      return;
    }

    scheduleContainer.innerHTML = filtered.map(item => `
      <div class="schedule-row" data-id="${item.id}">
        <div class="row-time">
          <div class="time-start">${item.time}</div>
          <div class="time-duration">${item.duration}</div>
        </div>
        <div class="row-class">
          <h3>${item.name}</h3>
          <span>Intensity: ${item.intensity}</span>
        </div>
        <div class="row-instructor">
          <img src="${item.avatar}" alt="${item.instructor}" class="instructor-avatar" />
          <div class="instructor-info">
            <h4>${item.instructor}</h4>
            <span>${item.role}</span>
          </div>
        </div>
        <div class="row-capacity">
          <span class="spots-badge ${item.spots <= 3 ? 'few' : ''}">
            ${item.spots <= 3 ? `🔥 Only ${item.spots} spots left` : `${item.spots} spots available`}
          </span>
        </div>
        <div>
          <button class="btn btn-primary btn-sm book-class-trigger" 
                  data-class-name="${item.name}" 
                  data-class-time="${item.time}" 
                  data-class-coach="${item.instructor}">
            Reserve Spot
          </button>
        </div>
      </div>
    `).join('');

    // Attach click events to "Reserve Spot" buttons
    document.querySelectorAll('.book-class-trigger').forEach(btn => {
      btn.addEventListener('click', () => {
        const cName = btn.getAttribute('data-class-name');
        const cTime = btn.getAttribute('data-class-time');
        const cCoach = btn.getAttribute('data-class-coach');

        if (window.openBookingModal) {
          window.openBookingModal({
            title: `Reserve: ${cName}`,
            subtitle: `${cTime} with ${cCoach}`,
            type: 'class',
            details: `${cName} (${cTime})`
          });
        }
      });
    });
  }

  // Day buttons
  dayButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      dayButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeDay = btn.getAttribute('data-day');
      renderSchedule();
    });
  });

  if (categoryFilter) categoryFilter.addEventListener('change', renderSchedule);
  if (timeFilter) timeFilter.addEventListener('change', renderSchedule);

  renderSchedule();
});
