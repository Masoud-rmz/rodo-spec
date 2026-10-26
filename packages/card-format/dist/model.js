export function emptyModel() {
    return {
        schemaVersion: 2, title: '', status: 'todo', statusReason: null, blockerType: null,
        priority: 'none', members: [], labels: [], startAt: null, dueAt: null, coverColor: null,
        hoursMinutes: null, financial: { type: 'none', amount: 0, category: 'general', date: null },
        scope: null, test: null, updatedAt: null, locked: false, description: '',
        refs: [], decisions: [], checklists: [], extras: {},
    };
}
