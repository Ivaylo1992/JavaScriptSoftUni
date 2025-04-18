function checkWorker (workerObj) {
    if (workerObj.dizziness) {
        let neededHydration = 0.1 * workerObj.weight * workerObj.experience;
        workerObj.levelOfHydrated += neededHydration;
        workerObj.dizziness = false;
    }

    return workerObj;
}

console.log(checkWorker({ weight: 120,

    experience: 20,
    
    levelOfHydrated: 200,
    
    dizziness: true }));
