# Git Workflow

Last verified: 2026-07-19

1. Work only in `B:\Codex\FilterWizard\FilterWizard`.
2. Run `git status --short --branch` and `git remote -v`; understand existing changes before editing.
3. Create/use a focused `codex/...` feature branch when authorized. Do not switch or create branches when the user requested inspection only.
4. Make focused in-place edits; preserve unrelated user work.
5. Review `git diff --check`, `git diff --stat`, and the complete diff.
6. Test locally per [`TESTING.md`](TESTING.md).
7. Stage only intended files and commit with an imperative, descriptive message when explicitly authorized.
8. Push only to the intended branch with explicit authorization.
9. Review preview/deployment and production smoke checks.
10. Merge only after validation; preserve the branch/commit as a rollback point.

Safe rollback: identify the known-good and problematic commits with read-only history, prefer `git revert <commit>` to create an auditable inverse change, test, then deploy. For uncommitted mistakes, restore only exact files after confirming they contain no user work. Never default to `git reset --hard`, broad checkout, recursive deletion, deleting `.git`, or recloning over the workspace.

Do not commit generated ZIPs, `changed-files-*`, downloads, private logs, secrets, or backup copies. Documentation-only tasks should not alter production code.

Commit boundaries should tell one reviewable story. A production behavior change and its required documentation belong together; unrelated cleanup does not. Untracked files are not shown by ordinary `git diff`, so include `git status --short --untracked-files=all` and inspect new files directly. Do not assume a clean tracked diff means a clean task scope.

Branch creation, staging, commit, push, merge, revert, and deployment are distinct permissions. Authorization for one does not imply the next. Follow [`DECISION_FRAMEWORK.md`](DECISION_FRAMEWORK.md) when scope or ownership is unclear.

Update this file when: branch policy, remote, CI/review steps, release authorization, or rollback practice changes.
