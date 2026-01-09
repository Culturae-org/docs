# General Contribution Guide

This guide covers general aspects of contributing to the Cultpedia project, whether for code, documentation, or project organization.

## Types of Contributions

### 🤔 Questions and Content
- Adding new educational questions
- Improving existing translations
- Correcting erroneous content
- Suggesting new themes

### 💻 Development
- CLI tool improvements
- New validation features
- Performance optimizations
- Bug fixes

### 📚 Documentation
- Improving this documentation
- Adding practical examples
- Documentation translations
- Usage guides

### 🏗️ Infrastructure
- CI/CD workflow improvements
- Build and deployment scripts
- Nix configuration
- Automated testing

## Contribution Process

### 1. Preparation

#### Fork and Clone
```bash
# Fork on GitHub (web interface)
# Then clone your fork
git clone https://github.com/YOUR_USERNAME/cultpedia.git
cd cultpedia

# Add upstream remote
git remote add upstream https://github.com/Culturae-org/cultpedia.git
```

#### Environment Setup
```bash
# With Nix (recommended)
nix develop

# Or manually
go build -o cultpedia ./cmd
```

### 2. Development

#### Create a Branch
```bash
# For a feature
git checkout -b feature/feature-name

# For a fix
git checkout -b fix/bug-description

# For documentation
git checkout -b docs/improve-guide
```

#### Commit Conventions
```bash
# Accepted formats:
git commit -m "feat: add advanced question validation"
git commit -m "fix: correct slug validation"
git commit -m "docs: improve contribution guide"
git commit -m "refactor: simplify parsing logic"
```

### 3. Testing and Validation

#### Local Tests
```bash
# Validate all questions
./cultpedia validate

# Check duplicates
./cultpedia check-duplicates

# Check translations
./cultpedia check-translations

# Go tests (if applicable)
go test ./...
```

#### Build and Linting
```bash
# Check compilation
go build ./cmd

# Format code
go fmt ./...

# Check for errors
go vet ./...
```

### 4. Pull Request

#### Before Pushing
```bash
# Sync with upstream
git fetch upstream
git rebase upstream/main

# Push your branch
git push origin your-branch-name
```

#### Create PR
1. Go to GitHub in your fork
2. Click "Compare & pull request"
3. Fill out:
   - **Title**: Clear and descriptive
   - **Description**: What changes? Why? How to test?
   - **Labels**: `enhancement`, `bug`, `documentation`, etc.

#### Suggested PR Template
```markdown
## Description
[Describe the changes made]

## Type of Change
- [ ] New feature (feat)
- [ ] Bug fix (fix)
- [ ] Breaking change
- [ ] Documentation

## Testing
- [ ] Local tests pass
- [ ] CI passes
- [ ] Documentation updated

## Checklist
- [ ] Code follows project standards
- [ ] Commits are atomic
- [ ] No secrets committed
```

## Rules and Standards

### Code of Conduct
- Mutual respect and inclusivity
- Help new contributors
- Report inappropriate behavior

### Code Quality
- Self-documenting code when possible
- Comments for complex logic
- Tests for new features
- Follow Go conventions

### Security
- No sensitive data in code
- User input validation
- Regular dependency updates

### Data and Content
- Factually correct questions
- Verifiable sources
- Quality translations
- Cultural diversity respect

## CI/CD Workflows

Cultpedia uses GitHub Actions for automation:

### PR Validation (`validate-questions-pr.yml`)
- Triggered on PRs modifying `questions.ndjson`
- Complete question validation
- Data integrity checks

### Sync (`sync-on-merge.yml`)
- Triggered after merge to main
- Automatic metadata updates
- Generated file updates
- Version bumping

## Tools and Environments

### Nix Development Environment
```nix
# flake.nix defines:
- Go 1.24
- Build dependencies
- Installation scripts
- Environment variables
```

### Build Scripts
```bash
# Linux/macOS
./build.sh

# Windows
./build.bat

# Manual compilation
go build -o cultpedia ./cmd
```

## Troubleshooting

### Common Issues

#### "Validation fails"
```bash
# Check JSON syntax
python3 -m json.tool datasets/new-question.json

# Validate against schema
./cultpedia validate
```

#### "Merge conflicts"
```bash
# Abort rebase
git rebase --abort

# See conflicts
git status

# Resolve then continue
git add resolved-file
git rebase --continue
```

#### "CI fails"
- Check GitHub Actions logs
- Fix local errors first
- Test all checks before pushing

## Useful Resources

- [Go Documentation](https://golang.org/doc/)
- [Git Guide](https://git-scm.com/book/)
- [JSON Schema](https://json-schema.org/)
- [Conventional Commits](https://conventionalcommits.org/)

## Acknowledgments

Every contribution, even minor ones, is valuable to Cultpedia. Thank you for helping build a better educational platform for everyone! 🌟

For question-specific guidance, see the [Question Contribution Guide](./contributing).