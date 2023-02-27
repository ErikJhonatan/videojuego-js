# Regression cases

Prepared for this change. **Not executed.** Tests, manual checks, lint and builds require explicit user authorization. Use isolated fixtures; never run destructive cases against production.

| Case | Input or setup | Expected outcome |
| --- | --- | --- |
| Missing canvas | Load game script without #game or 2D context | Script exits safely |
| Resize | Rapid resize events including tiny viewport | One animation frame queued; font size stays positive |
| Cleanup | Leave page with pending resize frame | Frame cancelled and resize listener removed |
