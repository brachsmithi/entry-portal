import { formatDuration } from "./DisplayFormatters"

describe('DisplayFormatters', () => {

  describe('formatDuration', () => {

    it('should handle below 5 minutes', () => {
      expect(formatDuration(3)).toEqual('0:03')
    })

    it('should handle below 60 minutes', () => {
      expect(formatDuration(59)).toEqual('0:59')
    })

    it('should handle sixty minutes', () => {
      expect(formatDuration(60)).toEqual('1:00')
    })

    it('should handle over 5 hours', () => {
      expect(formatDuration(341)).toEqual('5:41')
    })

    it('handles missing time', () => {
      expect(formatDuration(undefined)).toEqual('--')
    })

  })

})