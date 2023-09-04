import { cn, logger } from './helpers'

describe('cn function', () => {
  it('should merge class names correctly', () => {
    const mergedClasses = cn('class1', 'class2', { class3: true, class4: false })
    expect(mergedClasses).toBe('class1 class2 class3')
  })

  it('should handle empty input', () => {
    const mergedClasses = cn()
    expect(mergedClasses).toBe('')
  })

  // Add more test cases as needed
})

describe('logger function', () => {
  it('should log to the console in development', () => {
    // Mock the console.log function
    const consoleLogSpy = jest.spyOn(console, 'log')

    // Call the logger function
    logger('test log message', 'test comment')

    // Expect that console.log was called with the expected arguments
    expect(consoleLogSpy).toHaveBeenCalledWith(
      '%c ============== INFO LOG \n',
      'color: #22D3EE',
      expect.any(String), // Pathname
      '=== test comment\n',
      'test log message'
    )

    // Restore the original console.log function
    consoleLogSpy.mockRestore()
  })
})
