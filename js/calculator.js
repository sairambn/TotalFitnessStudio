/* ==========================================================================
   TOTAL FITNESS STUDIO (TFS) - INTERACTIVE BMI & NUTRITION CALCULATOR
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const unitMetricBtn = document.getElementById('calc-unit-metric');
  const unitImperialBtn = document.getElementById('calc-unit-imperial');

  const metricFields = document.getElementById('metric-inputs');
  const imperialFields = document.getElementById('imperial-inputs');

  const ageInput = document.getElementById('calc-age');
  const genderInput = document.getElementById('calc-gender');
  const activityInput = document.getElementById('calc-activity');
  const goalInput = document.getElementById('calc-goal');

  // Metric inputs
  const heightCmInput = document.getElementById('calc-height-cm');
  const weightKgInput = document.getElementById('calc-weight-kg');

  // Imperial inputs
  const heightFtInput = document.getElementById('calc-height-ft');
  const heightInInput = document.getElementById('calc-height-in');
  const weightLbsInput = document.getElementById('calc-weight-lbs');

  // Output elements
  const bmiScoreEl = document.getElementById('output-bmi-score');
  const bmiStatusEl = document.getElementById('output-bmi-status');
  const caloriesEl = document.getElementById('output-calories');
  const proteinEl = document.getElementById('output-protein');
  const carbsEl = document.getElementById('output-carbs');
  const fatsEl = document.getElementById('output-fats');
  const programRecEl = document.getElementById('output-program-rec');

  let currentUnit = 'metric';

  // Toggle Units
  if (unitMetricBtn && unitImperialBtn) {
    unitMetricBtn.addEventListener('click', () => {
      currentUnit = 'metric';
      unitMetricBtn.classList.add('active');
      unitImperialBtn.classList.remove('active');
      metricFields.style.display = 'grid';
      imperialFields.style.display = 'none';
      calculateMetrics();
    });

    unitImperialBtn.addEventListener('click', () => {
      currentUnit = 'imperial';
      unitImperialBtn.classList.add('active');
      unitMetricBtn.classList.remove('active');
      metricFields.style.display = 'none';
      imperialFields.style.display = 'grid';
      calculateMetrics();
    });
  }

  function calculateMetrics() {
    let heightCm = 175;
    let weightKg = 72;

    if (currentUnit === 'metric') {
      heightCm = parseFloat(heightCmInput.value) || 175;
      weightKg = parseFloat(weightKgInput.value) || 72;
    } else {
      const ft = parseFloat(heightFtInput.value) || 5;
      const inch = parseFloat(heightInInput.value) || 9;
      heightCm = (ft * 12 + inch) * 2.54;
      const lbs = parseFloat(weightLbsInput.value) || 160;
      weightKg = lbs * 0.453592;
    }

    const age = parseInt(ageInput.value) || 28;
    const gender = genderInput.value;
    const activityMult = parseFloat(activityInput.value) || 1.4;
    const goal = goalInput.value;

    // BMI calculation: weight(kg) / (height(m))^2
    const heightM = heightCm / 100;
    const bmi = (weightKg / (heightM * heightM)).toFixed(1);

    bmiScoreEl.textContent = bmi;

    // Status category
    let statusText = 'Normal';
    let statusColor = '#ccff00';
    let recProgram = 'TFS Hybrid Conditioning & Functional Turf';

    if (bmi < 18.5) {
      statusText = 'Underweight';
      statusColor = '#00f2fe';
      recProgram = 'Hypertrophy & Strength Bulk Protocol';
    } else if (bmi >= 18.5 && bmi < 25) {
      statusText = 'Optimal Health';
      statusColor = '#ccff00';
      recProgram = 'TFS All-Round Athletic & Functional Turf';
    } else if (bmi >= 25 && bmi < 30) {
      statusText = 'Overweight';
      statusColor = '#ffb703';
      recProgram = 'High-Intensity MetCon & Fat Shred';
    } else {
      statusText = 'High Body Mass';
      statusColor = '#ff5e36';
      recProgram = 'Accelerated Cardio & Metabolic Recomp';
    }

    bmiStatusEl.textContent = statusText;
    bmiStatusEl.style.color = statusColor;
    bmiStatusEl.style.backgroundColor = `${statusColor}22`;
    if (programRecEl) programRecEl.textContent = recProgram;

    // Update Animated BMI Gauge Pointer (Scale 15 to 35 BMI)
    const bmiGaugePointer = document.getElementById('bmi-gauge-pointer');
    if (bmiGaugePointer) {
      const minBmi = 15;
      const maxBmi = 35;
      const normalizedBmi = Math.min(maxBmi, Math.max(minBmi, parseFloat(bmi)));
      const gaugePercent = ((normalizedBmi - minBmi) / (maxBmi - minBmi)) * 100;
      bmiGaugePointer.style.left = `${Math.min(97, Math.max(3, gaugePercent))}%`;
      bmiGaugePointer.style.boxShadow = `0 0 12px ${statusColor}`;
    }

    // BMR (Mifflin-St Jeor formula)
    let bmr = 10 * weightKg + 6.25 * heightCm - 5 * age;
    if (gender === 'male') {
      bmr += 5;
    } else {
      bmr -= 161;
    }

    // TDEE
    const tdee = Math.round(bmr * activityMult);
    let targetCalories = tdee;

    if (goal === 'cut') {
      targetCalories = tdee - 500;
    } else if (goal === 'bulk') {
      targetCalories = tdee + 350;
    }

    caloriesEl.textContent = `${targetCalories.toLocaleString()} kcal`;

    // Macronutrient Split
    // Protein: ~2g per kg bodyweight
    const proteinGrams = Math.round(weightKg * 2.0);
    const proteinCal = proteinGrams * 4;

    // Fat: ~25% of calories
    const fatCal = targetCalories * 0.25;
    const fatGrams = Math.round(fatCal / 9);

    // Carbs: remainder
    const carbCal = Math.max(0, targetCalories - proteinCal - fatCal);
    const carbGrams = Math.round(carbCal / 4);

    proteinEl.textContent = `${proteinGrams}g`;
    fatsEl.textContent = `${fatGrams}g`;
    carbsEl.textContent = `${carbGrams}g`;

    const proteinLegendEl = document.getElementById('output-protein-legend');
    if (proteinLegendEl) proteinLegendEl.textContent = `${proteinGrams}g`;

    // Dynamically Animate Macronutrient Ratio Progress Bars
    const totalMacroCal = proteinCal + fatCal + carbCal;
    if (totalMacroCal > 0) {
      const pPct = Math.round((proteinCal / totalMacroCal) * 100);
      const fPct = Math.round((fatCal / totalMacroCal) * 100);
      const cPct = Math.max(0, 100 - pPct - fPct);

      const macroPBar = document.querySelector('.macro-p');
      const macroCBar = document.querySelector('.macro-c');
      const macroFBar = document.querySelector('.macro-f');

      if (macroPBar) {
        macroPBar.style.width = `${pPct}%`;
        macroPBar.title = `Protein: ${pPct}% (${proteinGrams}g)`;
      }
      if (macroCBar) {
        macroCBar.style.width = `${cPct}%`;
        macroCBar.title = `Carbohydrates: ${cPct}% (${carbGrams}g)`;
      }
      if (macroFBar) {
        macroFBar.style.width = `${fPct}%`;
        macroFBar.title = `Fats: ${fPct}% (${fatGrams}g)`;
      }
    }
  }

  // Bind input listeners
  const allInputs = [
    ageInput, genderInput, activityInput, goalInput,
    heightCmInput, weightKgInput, heightFtInput, heightInInput, weightLbsInput
  ];

  allInputs.forEach(input => {
    if (input) {
      input.addEventListener('input', calculateMetrics);
      input.addEventListener('change', calculateMetrics);
    }
  });

  // Prepopulate booking modal with calculated diet profile
  const claimDietTrialBtn = document.getElementById('calc-claim-trial-btn');
  if (claimDietTrialBtn) {
    claimDietTrialBtn.addEventListener('click', () => {
      const goalVal = goalInput ? goalInput.value : 'maintain';
      const trialGoal = document.getElementById('trial-goal');
      if (trialGoal) {
        if (goalVal === 'cut') trialGoal.value = 'Fat Loss & Caloric Deficit';
        else if (goalVal === 'bulk') trialGoal.value = 'Muscle Hypertrophy & Strength';
        else trialGoal.value = 'General Health & Stamina';
      }
      if (window.openBookingModal) {
        const cal = caloriesEl ? caloriesEl.textContent : '2,400 kcal';
        window.openBookingModal({
          title: `Claim 7-Day Pass (${cal} Plan)`,
          subtitle: `Includes free body composition & macro review with Master Sakthi`,
          details: `Custom Diet Target: ${cal}`
        });
      }
    });
  }

  // Initial run
  calculateMetrics();
});
